# Generated by Django 3.1.5 on 2021-03-02 06:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('model', '0002_badpointstemplates'),
    ]

    operations = [
        migrations.AddField(
            model_name='badpointstemplates',
            name='round_log',
            field=models.JSONField(default=list, verbose_name='Record of Log in Normal Road'),
        ),
    ]
