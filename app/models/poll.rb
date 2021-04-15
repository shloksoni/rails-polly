class Poll < ApplicationRecord
  belongs_to :user
  has_many :option
  accepts_nested_attributes_for :option
  validates :title, presence: true, length: { maximum: 100 }

end
