# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).,
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
i = 1
10.times do
  Art.create({  title: "Art - #{i}",
                tagline: "This is art.",
                description: "Do you know what art is? this is it!",
                limited: false,
                quantity: 60,
                price: 60,
                image_url: "http://41.media.tumblr.com/fe6ce46189ca624640604546b8f79f27/tumblr_mws5s4jvP21t25zvpo1_1280.png"  });
  i += 1
end