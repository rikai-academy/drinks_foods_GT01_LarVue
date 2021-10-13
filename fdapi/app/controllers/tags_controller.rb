class TagsController < ApplicationController
	def index
    tags = Tag.all
    render json: tags
  end

	def create
    tag = Tag.create(tag_params)
    render json: tag
  end

  def update
    tag = Tag.find(params[:id])
    tag.update(tag_params)
    render json: tag
  end

  def destroy
    tag = Tag.find(params[:id])
    tag.destroy
    head :no_content, status: :ok
  end
  
  private
    def tag_params
      params.require(:tag).permit(:content, :vi_content)
    end
end
