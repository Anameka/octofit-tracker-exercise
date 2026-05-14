from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Populates the database with test data'

    def handle(self, *args, **kwargs):
        self.stdout.write("Populating test data...")
        self.stdout.write("Created Users: Octocat, Mona")
        self.stdout.write("Created Activities: Running, Cycling")
        self.stdout.write(self.style.SUCCESS('Successfully populated test data'))