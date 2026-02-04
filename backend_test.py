#!/usr/bin/env python3
"""
Backend API Testing Script for Portfolio Website
Tests all contact form endpoints and validates functionality
"""

import requests
import json
import os
from datetime import datetime
import sys

# Get backend URL from environment
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://frontcraft-folio.preview.emergentagent.com')
API_BASE = f"{BACKEND_URL}/api"

class BackendTester:
    def __init__(self):
        self.api_base = API_BASE
        self.test_results = []
        
    def log_test(self, test_name, success, message, details=None):
        """Log test results"""
        result = {
            'test': test_name,
            'success': success,
            'message': message,
            'timestamp': datetime.now().isoformat(),
            'details': details or {}
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if details and not success:
            print(f"   Details: {details}")
    
    def test_root_endpoint(self):
        """Test GET /api/ endpoint"""
        try:
            response = requests.get(f"{self.api_base}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('message') == 'Hello World':
                    self.log_test("Root Endpoint", True, "Hello World endpoint working correctly")
                    return True
                else:
                    self.log_test("Root Endpoint", False, f"Unexpected response: {data}")
                    return False
            else:
                self.log_test("Root Endpoint", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Root Endpoint", False, f"Request failed: {str(e)}")
            return False
    
    def test_contact_form_valid_submission(self):
        """Test POST /api/contact with valid data"""
        try:
            valid_data = {
                "name": "Sarah Johnson",
                "email": "sarah.johnson@example.com",
                "message": "Hello! I'm interested in discussing a potential web development project. Could we schedule a call to discuss the requirements and timeline?"
            }
            
            response = requests.post(
                f"{self.api_base}/contact",
                json=valid_data,
                headers={'Content-Type': 'application/json'},
                timeout=15
            )
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['success', 'message', 'submission_id']
                
                if all(field in data for field in required_fields):
                    if data['success'] and data['submission_id']:
                        self.log_test(
                            "Contact Form Valid Submission", 
                            True, 
                            "Valid submission processed successfully",
                            {'submission_id': data['submission_id'], 'response_message': data['message']}
                        )
                        return data['submission_id']  # Return for later verification
                    else:
                        self.log_test("Contact Form Valid Submission", False, f"Success flag false or missing submission_id: {data}")
                        return False
                else:
                    self.log_test("Contact Form Valid Submission", False, f"Missing required fields in response: {data}")
                    return False
            else:
                self.log_test("Contact Form Valid Submission", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Contact Form Valid Submission", False, f"Request failed: {str(e)}")
            return False
    
    def test_contact_form_validation_errors(self):
        """Test POST /api/contact with invalid data"""
        test_cases = [
            {
                "name": "Missing Name Field",
                "data": {
                    "email": "test@example.com",
                    "message": "This is a test message that is long enough to pass validation."
                },
                "expected_error": "name"
            },
            {
                "name": "Invalid Email",
                "data": {
                    "name": "Test User",
                    "email": "invalid-email",
                    "message": "This is a test message that is long enough to pass validation."
                },
                "expected_error": "email"
            },
            {
                "name": "Message Too Short",
                "data": {
                    "name": "Test User",
                    "email": "test@example.com",
                    "message": "Short"
                },
                "expected_error": "message"
            },
            {
                "name": "Empty Name",
                "data": {
                    "name": "",
                    "email": "test@example.com",
                    "message": "This is a test message that is long enough to pass validation."
                },
                "expected_error": "name"
            }
        ]
        
        validation_passed = True
        
        for test_case in test_cases:
            try:
                response = requests.post(
                    f"{self.api_base}/contact",
                    json=test_case["data"],
                    headers={'Content-Type': 'application/json'},
                    timeout=10
                )
                
                # Should return 422 for validation errors
                if response.status_code == 422:
                    self.log_test(
                        f"Validation - {test_case['name']}", 
                        True, 
                        "Validation error correctly returned"
                    )
                else:
                    self.log_test(
                        f"Validation - {test_case['name']}", 
                        False, 
                        f"Expected 422, got {response.status_code}: {response.text}"
                    )
                    validation_passed = False
                    
            except Exception as e:
                self.log_test(f"Validation - {test_case['name']}", False, f"Request failed: {str(e)}")
                validation_passed = False
        
        return validation_passed
    
    def test_get_submissions(self):
        """Test GET /api/contact/submissions endpoint"""
        try:
            response = requests.get(f"{self.api_base}/contact/submissions", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if isinstance(data, list):
                    # Check if submissions are sorted by created_at (newest first)
                    if len(data) > 1:
                        dates_sorted = True
                        for i in range(len(data) - 1):
                            if 'created_at' in data[i] and 'created_at' in data[i + 1]:
                                current_date = datetime.fromisoformat(data[i]['created_at'].replace('Z', '+00:00'))
                                next_date = datetime.fromisoformat(data[i + 1]['created_at'].replace('Z', '+00:00'))
                                if current_date < next_date:
                                    dates_sorted = False
                                    break
                        
                        if not dates_sorted:
                            self.log_test("Get Submissions", False, "Submissions not sorted by created_at (newest first)")
                            return False
                    
                    # Check required fields in submissions
                    if data:  # If there are submissions
                        required_fields = ['id', 'name', 'email', 'message', 'created_at']
                        first_submission = data[0]
                        
                        if all(field in first_submission for field in required_fields):
                            self.log_test(
                                "Get Submissions", 
                                True, 
                                f"Retrieved {len(data)} submissions with correct structure",
                                {'count': len(data), 'sample_fields': list(first_submission.keys())}
                            )
                            return True
                        else:
                            missing_fields = [field for field in required_fields if field not in first_submission]
                            self.log_test("Get Submissions", False, f"Missing required fields: {missing_fields}")
                            return False
                    else:
                        self.log_test("Get Submissions", True, "Retrieved empty submissions list (no submissions yet)")
                        return True
                else:
                    self.log_test("Get Submissions", False, f"Expected list, got: {type(data)}")
                    return False
            else:
                self.log_test("Get Submissions", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except Exception as e:
            self.log_test("Get Submissions", False, f"Request failed: {str(e)}")
            return False
    
    def verify_submission_in_database(self, submission_id):
        """Verify that a submission was saved to the database"""
        try:
            response = requests.get(f"{self.api_base}/contact/submissions", timeout=10)
            
            if response.status_code == 200:
                submissions = response.json()
                
                # Look for the submission with the given ID
                found_submission = None
                for submission in submissions:
                    if submission.get('id') == submission_id:
                        found_submission = submission
                        break
                
                if found_submission:
                    self.log_test(
                        "Database Persistence", 
                        True, 
                        "Submission successfully saved to MongoDB",
                        {'submission_id': submission_id, 'name': found_submission.get('name')}
                    )
                    return True
                else:
                    self.log_test("Database Persistence", False, f"Submission {submission_id} not found in database")
                    return False
            else:
                self.log_test("Database Persistence", False, f"Could not retrieve submissions: HTTP {response.status_code}")
                return False
                
        except Exception as e:
            self.log_test("Database Persistence", False, f"Database verification failed: {str(e)}")
            return False
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend API Tests")
        print(f"📍 Testing API Base: {self.api_base}")
        print("=" * 60)
        
        # Test 1: Root endpoint
        root_success = self.test_root_endpoint()
        
        # Test 2: Valid contact form submission
        submission_id = self.test_contact_form_valid_submission()
        
        # Test 3: Contact form validation
        validation_success = self.test_contact_form_validation_errors()
        
        # Test 4: Get submissions endpoint
        submissions_success = self.test_get_submissions()
        
        # Test 5: Verify database persistence (if we got a submission_id)
        persistence_success = True
        if submission_id:
            persistence_success = self.verify_submission_in_database(submission_id)
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results if result['success'])
        
        print(f"Total Tests: {total_tests}")
        print(f"Passed: {passed_tests}")
        print(f"Failed: {total_tests - passed_tests}")
        
        if passed_tests == total_tests:
            print("🎉 All tests passed!")
            return True
        else:
            print("⚠️  Some tests failed. Check details above.")
            print("\nFailed Tests:")
            for result in self.test_results:
                if not result['success']:
                    print(f"  - {result['test']}: {result['message']}")
            return False

def main():
    """Main test execution"""
    print("Portfolio Website Backend API Testing")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base: {API_BASE}")
    
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()