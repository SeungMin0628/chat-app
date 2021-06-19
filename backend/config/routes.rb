Rails.application.routes.draw do
  resource :samples, only: %i[show]
end
