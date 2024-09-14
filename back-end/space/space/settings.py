"""
space projesi için Django ayarları.

'Django-admin startproject' komutuyla oluşturuldu, Django 5.1.1.

Bu dosya hakkında daha fazla bilgi için:
https://docs.djangoproject.com/en/5.1/topics/settings/

Tüm ayarların ve değerlerinin tam listesi için:
https://docs.djangoproject.com/en/5.1/ref/settings/
"""

from pathlib import Path

# Proje içindeki yolları şöyle oluşturun: BASE_DIR / 'alt_dizin'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Hızlı başlangıç geliştirme ayarları - üretim için uygun değil
# Üretim için daha güvenli ayarlar hakkında bilgi için:
# https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# GÜVENLİK UYARISI: Üretimde kullanılacak gizli anahtarı gizli tutun!
SECRET_KEY = 'django-insecure-9&pfrh&w(-^t#b9()v66mol%^_l6q+&vwl6zw9%o(uf-#*xjk)'

# GÜVENLİK UYARISI: Üretimde debug modunu açık bırakmayın!
DEBUG = True

ALLOWED_HOSTS = []

# Uygulama tanımları

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',  # CORS desteği için
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # CORS middleware'ini ekleyin
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'space.urls'

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

WSGI_APPLICATION = 'space.wsgi.application'

# Veritabanı
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Şifre doğrulama
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

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

# Uluslararasılaştırma
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Statik dosyalar (CSS, JavaScript, Resimler)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = 'static/'

# Varsayılan birincil anahtar alanı türü
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

NASA_API_KEY = 'gnYVD5JdV6ypXGNY7fqKVhEtlct0ms49tyhEmmsL'

# CORS ayarları

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    # Diğer izin verilen kökenleri buraya ekleyin
]

# Tüm kökenlere izin verme (güvenlik açısından üretim için önerilmez)
# CORS_ALLOW_ALL_ORIGINS = True
