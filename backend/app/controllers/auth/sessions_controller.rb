# ログイン状態確認用コントローラー
class Auth::SessionsController < ApplicationController
    def index
      if current_api_v1_user
        render json: { is_login: true, data: current_api_v1_user }
      else
        render json: { is_login: false, message: "ユーザーが存在しません" }
      end
    end
end