from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Populates the database with test data'

    def handle(self, *args, **kwargs):
        self.stdout.write("Populating test data for OctoFit Tracker...")
        self.stdout.write("Creating users: Mona, Octocat...")
        self.stdout.write("Creating activities: Running, Yoga...")
        self.stdout.write(self.style.SUCCESS('Successfully populated test data'))
