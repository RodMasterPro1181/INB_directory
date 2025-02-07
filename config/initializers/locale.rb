
# Where the I18n library should search for translation files
I18n.load_path += Dir[Rails.root.join("lib", "locale", "*.{rb,yml}")]

# Permitted locales available for the application
I18n.available_locales = [:en, :pt]

# Set default locale to something other than :en
I18n.default_locale = :pt

I18n.t "activerecord.errors.messages.record_invalid"
I18n.t "errors.messages.record_invalid", scope: :activerecord
I18n.t :record_invalid, scope: "activerecord.errors.messages"
I18n.t :record_invalid, scope: [:activerecord, :errors, :messages]

I18n.t :missing, default: [:also_missing, "Not here"]
# => 'Not here'

I18n.t "errors.messages"
# => {:inclusion=>"is not included in the list", :exclusion=> ... }

I18n.t "welcome", app_name: "book store"
# => {:title=>"Welcome!", :content=>"Welcome to the %{app_name}"}

I18n.t "welcome", deep_interpolation: true, app_name: "book store"
# => {:title=>"Welcome!", :content=>"Welcome to the book store"}

I18n.backend.store_translations :en, inbox: {
  zero: "no messages", # optional
  one: "one message",
  other: "%{count} messages"
}
I18n.translate :inbox, count: 2
# => '2 messages'

I18n.translate :inbox, count: 1
# => 'one message'

I18n.translate :inbox, count: 0
# => 'no messages'
