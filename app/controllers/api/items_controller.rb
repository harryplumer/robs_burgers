class Api::ItemsController < ApplicationController
  before_action :set_api_item, only: [:show, :update, :destroy]
  
  
  def index
    @api_items = Item.order(:name)
  end

  def show
  end

  # POST /api/products
  # POST /api/products.json
  def create
    @api_item = Item.new(api_item_params)

    if @api_item.save
      @api_items = Item.order(:name)
      render :index, status: :created
    else
      render json: @api_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/products/1
  # PATCH/PUT /api/products/1.json
  def update
    if @api_item.update(api_item_params)
      @api_items = Item.order(:name)
      render :index
    else
      render json: @api_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/products/1
  # DELETE /api/products/1.json
  def destroy
    @api_item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_item
      @api_item = Item.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_item_params
      params.require(:item).permit(:name, :description, :price, :category)
    end
end

