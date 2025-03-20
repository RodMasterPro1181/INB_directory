class PeopleController < ApplicationController
  before_action :set_person, only: %i[show edit update destroy]

  # GET /people or /people.json
  def index
    flash[:notice] = t('flash.hello_flash')
    @people = Person.includes(:emails).all
  end

  # GET /people/1 or /people/1.json
  def show
  end

  # GET /people/new
  def new
    @person = Person.new
    @person.emails.build # Agregar un campo de email vacío en el formulario
  end

  # GET /people/1/edit
  def edit
    respond_to do |format|
      format.html
      format.turbo_stream
    end
    @person = Person.includes(:emails).find(params[:id])
    @person.emails.build if @person.emails.empty? # Agregar un campo vacío si no tiene emails
  end
  

  # POST /people or /people.json
  def create
    @person = Person.new(person_params)

    respond_to do |format|
      if @person.save
        format.html { redirect_to @person, notice: "Persona creada exitosamente." }
        format.json { render :show, status: :created, location: @person }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @person.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /people/1 or /people/1.json
  def update
    @person = Person.find(params[:id])
    if @person.update(person_params)
      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to @person, notice: "Persona actualizada correctamente." }
      end
    else
      render :edit, status: :unprocessable_entity
    end
  end
  

  # DELETE /people/1 or /people/1.json
  def destroy
    @person.destroy!

    respond_to do |format|
      format.html { redirect_to people_path, status: :see_other, notice: "Persona eliminada exitosamente." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_person
    @person = Person.find(params[:id])
  end

  def person_params
    params.require(:person).permit(:name, :last_name, emails_attributes: [:id, :email, :_destroy])
  end
 
  def new_email
    @person = Person.new
    @email = @person.emails.build
    render partial: "email_fields", locals: { email: @email }
  end
end