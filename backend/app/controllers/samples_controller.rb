class SamplesController < ApplicationController
  def show
    render json: { message: 'Hello world!' }, status: :ok
  end
end
