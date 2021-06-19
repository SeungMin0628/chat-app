require 'rails_helper'

RSpec.describe SamplesController, type: :controller do
  describe 'GET #show' do
    it 'renders a sample message' do
      get :show
      expect(response).to have_http_status :ok
      expect(JSON.parse(response.body, symbolize_names: true)).to eq({ message: 'Hello world!' })
    end
  end
end
