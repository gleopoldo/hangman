defmodule HangmanWeb.Router do
  use HangmanWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug CORSPlug, [origin: "*"]
    plug :accepts, ["json"]
  end

  scope "/", HangmanWeb do
    pipe_through :api

    get "/", PageController, :index
    options "/", PageController, :options
  end
end
