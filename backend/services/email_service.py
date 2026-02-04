import os
import logging
from typing import Dict, Any
import requests

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.emailjs_service_id = os.environ.get('EMAILJS_SERVICE_ID', '')
        self.emailjs_template_id = os.environ.get('EMAILJS_TEMPLATE_ID', '')
        self.emailjs_public_key = os.environ.get('EMAILJS_PUBLIC_KEY', '')
        self.emailjs_api_url = 'https://api.emailjs.com/api/v1.0/email/send'
    
    def send_contact_form_email(self, name: str, email: str, message: str) -> Dict[str, Any]:
        """
        Send contact form submission via EmailJS
        """
        try:
            # Check if EmailJS is configured
            if not all([self.emailjs_service_id, self.emailjs_template_id, self.emailjs_public_key]):
                logger.warning("EmailJS not fully configured. Skipping email send.")
                return {
                    'success': True,
                    'message': 'Contact form submitted successfully (email not configured)',
                    'email_sent': False
                }
            
            # Prepare EmailJS payload
            payload = {
                'service_id': self.emailjs_service_id,
                'template_id': self.emailjs_template_id,
                'user_id': self.emailjs_public_key,
                'template_params': {
                    'from_name': name,
                    'from_email': email,
                    'message': message,
                    'to_name': 'Satya Laswik Pakki'
                }
            }
            
            # Send email via EmailJS API
            response = requests.post(
                self.emailjs_api_url,
                json=payload,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            if response.status_code == 200:
                logger.info(f"Email sent successfully for {email}")
                return {
                    'success': True,
                    'message': 'Email sent successfully',
                    'email_sent': True
                }
            else:
                logger.error(f"EmailJS API error: {response.status_code} - {response.text}")
                return {
                    'success': False,
                    'message': 'Failed to send email',
                    'email_sent': False,
                    'error': response.text
                }
                
        except requests.exceptions.Timeout:
            logger.error("EmailJS API timeout")
            return {
                'success': False,
                'message': 'Email service timeout',
                'email_sent': False
            }
        except Exception as e:
            logger.error(f"Error sending email: {str(e)}")
            return {
                'success': False,
                'message': f'Error sending email: {str(e)}',
                'email_sent': False
            }

email_service = EmailService()