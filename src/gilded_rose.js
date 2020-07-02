
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    isCheese() {
        return this.name === 'Aged Brie';
    }

    isTicket() {
        return this.name === 'Backstage passes to a TAFKAL80ETC concert';
    }

    isWow() {
        return this.name === 'Sulfuras, Hand of Ragnaros';
    }
}

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

    ZeroQuality(item) {
        item.quality = item.quality - item.quality;
    }

    updateQuality() {
        this.items.forEach((item) => {
            if (!item.isCheese() && !item.isTicket()) {
                if (item.quality > 0 && !item.isWow()) {
                    this.decreaseQuality(item);
                }
            } else {
                if (item.quality < 50) {
                    this.increaseQuality(item);
                    if (item.isTicket() && item.sellIn < 11 && item.quality < 50) {
                        this.increaseQuality(item);
                        if (item.sellIn < 6 && item.quality < 50) {
                            this.increaseQuality(item);
                        }
                    }
                }
            }

            if (!item.isWow()) {
                this.decreaseSellIn(item);
            }

            if (item.sellIn < 0) {
                if (!item.isCheese()) {
                    if (!item.isTicket()) {
                        if (item.quality > 0 && !item.isWow()) {
                            this.decreaseQuality(item);
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
