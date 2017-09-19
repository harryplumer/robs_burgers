json.extract! api_item, :id, :name, :description, :category, :price
json.url api_item_url(api_item, format: :json)
