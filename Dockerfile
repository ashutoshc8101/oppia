FROM ubuntu:18.04

WORKDIR /oppia

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install -y \
    build-essential \
    ca-certificates \
    gcc \
    git \
    libpq-dev \
    make \
    python-pip \
    python2.7 \
    python2.7-dev \
    ssh \
    curl \
    python-setuptools \
    python-pip \
    python-yaml \
    && apt-get autoremove \
    && apt-get clean

COPY . /oppia/

CMD ["python", "-m", "scripts.start"]