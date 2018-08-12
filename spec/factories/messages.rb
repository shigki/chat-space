FactoryGirl.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open("#{Rails.root}/spec/images/no_image.jpg")
    user
    group
  end
end
