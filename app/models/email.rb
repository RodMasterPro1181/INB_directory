class Email < ApplicationRecord
    belongs_to :person
  
    validates :email, presence: true, uniqueness: true
end
  