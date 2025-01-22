class Person < ApplicationRecord
#Rama1, vamos a validar que la informacion no este en blanco, commit1
validates :name, presence: true, length:{maximum: 20}
validates :last_name, presence: true, length:{maximum: 20}

#Rama1,vamos a verificar que ya se pueden eliminar los registros, commit2

end
