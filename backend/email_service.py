import os
import resend

resend.api_key = os.environ.get("RESEND_API_KEY")

FRONTEND_URL = os.environ.get("FRONTEND_URL", "https://motor-lounge.preview.emergentagent.com")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "noreply@tuningtalalkozok.com")


def send_verification_email(email, token):
    verification_link = f"{FRONTEND_URL}/?verify_email={token}"

    resend.Emails.send({
        "from": SENDER_EMAIL,
        "to": email,
        "subject": "Email megerősítés - TuningTalálkozó",
        "html": f"""
        <html>
        <body style="font-family: Arial, sans-serif; padding: 20px; background-color: #18181b; color: #ffffff;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #27272a; padding: 30px; border-radius: 10px;">
                <h2 style="color: #f97316; margin-bottom: 20px;">TuningTalálkozó</h2>
                <p style="color: #a1a1aa; margin-bottom: 20px;">Kérlek erősítsd meg az emailed:</p>
                <a href="{verification_link}" style="display: inline-block; padding: 12px 24px; background: #f97316; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">Email megerősítése</a>
                <p style="color: #a1a1aa; margin-top: 20px;">Üdvözlettel,<br>TuningTalálkozó csapata</p>
            </div>
        </body>
        </html>
        """
    })
