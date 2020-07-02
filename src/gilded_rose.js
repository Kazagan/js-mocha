class Item {
  constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
  }
}

const backstagePassItemName = 'Backstage passes to a TAFKAL80ETC concert'
const agedBrieItemName = 'Aged Brie'
const sulfurasItemName = 'Sulfuras, Hand of Ragnaros'

class Shop {
  constructor(items = []) {
      this.items = items;
  }

  decreaseSellIn(item) {
      item.sellIn--
  }

  decreaseQuality(item) {
      item.quality--;
  }

  increaseQuality(item) {
      item.quality++
  }

  isCheese(item) {
      return item.name === 'Aged Brie'
  }
  isTicket(item) {
      return item.name === 'Backstage passes to a TAFKAL80ETC concert'
  }
  isWow(item) {
      return item.name === 'Sulfuras, Hand of Ragnaros'
  }

  ZeroQuality(item) {
      item.quality = item.quality - item.quality;
  }

  updateQuality() {
      this.items.forEach((item) => {
          if (!this.isCheese(item) && !this.isTicket(item)) {
              if (item.quality > 0 && !this.isWow(item)) {
                  this.decreaseQuality(item);
              }
          } else {
              if (item.quality < 50) {
                  this.increaseQuality(item);
                  if (this.isTicket(item) && item.sellIn < 11 && item.quality < 50) {
                      if (item.sellIn < 11 && item.quality < 50) {
                          this.increaseQuality(item);
                      }

                      if (item.sellIn < 6 && item.quality < 50) {
                          this.increaseQuality(item);
                      }
                  }
              }
          }

          if (!this.isWow(item)) {
              this.decreaseSellIn(item);
          }

          if (item.sellIn < 0) {
              if (!this.isCheese(item) ) {
                  if (!this.isTicket(item)) {
                      if (item.quality > 0) {
                          if (!this.isWow(item)) {
                              this.decreaseQuality(item);
                          }
                      }
                  } else {
                      this.ZeroQuality(item);
                  }
              } else {
                  if (item.quality < 50) {
                      this.increaseQuality(item);
                  }
              }
          }
      })

      return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
