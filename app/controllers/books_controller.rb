class BooksController < ApplicationController
    def create
      # ...
      redirect_to books_url, notice: t(".success")
    end
  end
  