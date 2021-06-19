FROM ruby:3.0-alpine

# Install packages
RUN apk update -qq && apk add --no-cache alpine-sdk \
    mysql-client \
    mysql-dev \
    build-base \
    bash \
    tzdata

# Make work directory
RUN mkdir /backend
WORKDIR /backend

# Install gem
COPY Gemfile ./Gemfile
COPY Gemfile.lock ./Gemfile.lock
RUN bundle install
COPY . ./
