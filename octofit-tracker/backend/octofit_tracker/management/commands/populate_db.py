from django.core.management.base import BaseCommand
# Import your models here (adjust names based on your actual model names)
# from api.models import User, Team, Activity 

class Command(BaseCommand):
    help = 'Populates the database with test data'

    def handle(self, *args, **kwargs):
        self.stdout.write("Populating test data for OctoFit Tracker...")
        
        # --- ADD DATA CREATION LOGIC HERE ---
        # Example (Copilot would normally generate this):
        # team = Team.objects.create(name="Octo-Enthusiasts")
        # user = User.objects.create(username="monacat", team=team)
        # Activity.objects.create(user=user, activity_type="Running", duration=30)
        
        self.stdout.write(self.style.SUCCESS('Successfully populated test data'))