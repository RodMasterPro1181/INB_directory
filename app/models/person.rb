class Person < ApplicationRecord
#Rama1, vamos a validar que la informacion no este en blanco, commit1
validates :name, presence: true, length:{maximum: 20}
validates :last_name, presence: true, length:{maximum: 20}

  has_many :emails, dependent: :destroy
  accepts_nested_attributes_for :emails, allow_destroy: true
end

 