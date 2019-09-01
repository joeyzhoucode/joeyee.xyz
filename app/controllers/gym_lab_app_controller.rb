class GymLabController < ApplicationController
  SEARCH_NEARBY_URI = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
  SEARCH_NEARBY_RADIUS = "radius=200"
  SEARCH_NEARBY_TYPE = "type=gym"
  SEARCH_NEARBY_KEY = "key=#{Rails.application.credentials[:google][:key]}"

  def gyms
    lat = params[:lat]
    lon = params[:lon]
    url = URI("#{SEARCH_NEARBY_URI}?location=#{lat},#{lon}&#{SEARCH_NEARBY_RADIUS}&#{SEARCH_NEARBY_TYPE}&#{SEARCH_NEARBY_KEY}")

    req = Net::HTTP::Get.new(url.to_s, "Content-Type" => "application/json")
    https = Net::HTTP.new(url.hostname, url.port)
    https.use_ssl = true
    res = https.request(req)
    render json: JSON.parse(res.body)["results"].map{ |r| [r["name"], r] }.to_h
  end
end
