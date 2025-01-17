class Person < ApplicationRecord
#Rama1, vamos a validar que la informacion no este en blanco
validates :name, presence: true 
validates :last_name, presence: true 
end
