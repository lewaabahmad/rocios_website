class Art < ActiveRecord::Base
  def venmo_url
    "https://venmo.com/?txn=pay&recipients=rocio-cabrera-1&amount=#{self.price}&note=#{self.venmo_note}&audience=private"
  end

  def venmo_note
    "Payment for #{self.title}".gsub(" ", "%20")
  end
end
