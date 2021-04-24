
from .base import *

SECRET_KEY = env.str('SECRET_KEY', default='no secret)')

# SECURITY WARNING: don't run with debug turned on in production!
# DEBUG = env.bool('ZULYA_PROJECT_ALLOWED_HOSTS', default=True)
DEBUG = env.bool('DEBUG', default=False)

ALLOWED_HOSTS = env.list('ZULYA_PROJECT_ALLOWED_HOSTS', default='localhost')

DATABASES = {
    'default': env.db('ZULYA_PROJECT_DATABASE')
}
