export interface YugiohCardResponse {
  data: YugiohCard[];
}

export interface YugiohCard {
  id: number;
  name: string;
  type: string;
  humanReadableCardType?: string;
  frameType: string;
  desc: string;
  race: string;
  attribute?: string;
  atk?: number;
  def?: number;
  level?: number;
  archetype?: string;
  card_images: YugiohCardImage[];
  card_prices?: YugiohCardPrice[];
}

export interface YugiohCardImage {
  id: number;
  image_url: string;
  image_url_small: string;
  image_url_cropped: string;
}

export interface YugiohCardPrice {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
  coolstuffinc_price: string;
}
