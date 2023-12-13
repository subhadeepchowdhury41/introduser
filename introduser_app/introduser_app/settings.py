import os
from pathlib import Path
# from django.utils.encoding import smart_text

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-z2n3^fk^1sbwsy^k$&s04)io75&gows8g5842&olmto2$)%5!c'

DEBUG = True

ALLOWED_HOSTS = []

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'introduser_api',
    'djoser',
    'corsheaders'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
}


JWT_AUTH = {
    'JWT_RESPONSE_PAYLOAD_HANDLER': 'introduser_app.utils.jwt_response_handler',
    'JWT_VERIFY_EXPIRATION': False,
}

AUTHENTICATION_CLASSES = (
    'djoser.views.TokenCreateView',
    'djoser.views.TokenDestroyView',
)

ROOT_URLCONF = 'introduser_app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'introduser_app.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'vyjpfpsw',
        'USER': 'vyjpfpsw',
        'PASSWORD': '5q6xl9iMAYDC3ReKW-k_3loqwfh27zsk',
        'HOST': 'rain.db.elephantsql.com',
        'PORT': '5432',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

# audio_project/settings.py

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Add the origin of your frontend application
]

# Allow credentials (cookies, Authorization headers, etc.)
CORS_ALLOW_CREDENTIALS = True

USE_TZ = True

STATIC_URL = '/files/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
