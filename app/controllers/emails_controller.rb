class EmailsController < ApplicationController
  def new
    @email = Email.new
  end

  def create
    @email = Email.new(email_params)

    if @email.save
      redirect_to people_path, notice: "Email agregado correctamente."
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def email_params
    params.require(:email).permit(:person_id, :email)
  end
end

