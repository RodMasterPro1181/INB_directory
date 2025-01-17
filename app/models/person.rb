class Person < ApplicationRecord
#Rama1, vamos a validar que la informacion no este en blanco, commit1
validates :name, presence: true 
validates :last_name, presence: true 

#Rama1,vamos a verificar que ya se pueden eliminar los registros, commit2
person =Person.find(1)
person.distroy!

end
