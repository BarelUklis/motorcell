export {getGear, Gear};

class Gear {
    type:string;
    brand:string;
    itemName:string;
    itemId:string;
    description:string;
    price:string;
    pic:string;

    constructor(type:string, brand:string, itemName:string, itemId:string, description:string, price:string, pic:string) {
        this.type = type;
        this.brand = brand;
        this.itemName = itemName;
        this.itemId = itemId;
        this.description = description;
        this.price = price;
        this.pic = pic;
    }
}

const createGear = (type:string, brand:string, itemName:string, itemId:string, description:string, price:string, pic:string): Gear => {
    return {type:type, brand:brand, itemName:itemName, itemId:itemId, description:description, price:price, pic:pic};
}

const gearArray: Gear[] = [
    createGear('Helmets', 'Alpinistar', 'Venom', 'asaj76', 'Helmet', '300$', 'https://www.revzilla.com/product_images/0906/6476/hjcrpha11_pro_venom2_helmet_black_red_white_750x750.jpg'),
    createGear('Helmets', 'AGV', 'K1', 'asaj76', 'Helmet', '200$', 'https://www.revzilla.com/product_images/0394/4154/agvk1_helmet_300x300.jpg'),
    createGear('Helmets', 'Alpinistar', 'Venom', 'asaj76', 'Helmet', '300$', 'https://www.revzilla.com/product_images/0906/6476/hjcrpha11_pro_venom2_helmet_black_red_white_750x750.jpg'),
    createGear('Helmets', 'Icon', 'Peacekeeper', 'asaj76', 'Helmet', '200$', 'https://www.revzilla.com/product_images/1444/0231/icon_hlmt_aflt_pckeepr_rubatone_white_300x300.jpg'),
    createGear('Helmets', 'Simpson', 'Bendit', 'asaj76', 'Helmet', '400$', 'https://www.revzilla.com/product_images/0328/9708/simpson_outlaw_bandit_helmet2017_black_300x300.jpg'),
    createGear('Armored-tops', 'Alpinistar', 'Armored jacet', 'asaj33', 'Armored jacket', '250$', 'https://www.revzilla.com/product_images/0309/4127/alpinestars_bionic_action_jacket_black_750x750.jpg'),
    createGear('Armored-tops', 'Alpinistar', 'Armored jacet', 'asaj33', 'Armored jacket', '250$', 'https://www.revzilla.com/product_images/0905/0370/alpinestars_viperv2_air_jacket_black_white_bright_red_300x300.jpg'),
    createGear('Armored-tops', 'Revit', 'Armored jacet', 'asaj33', 'Armored jacket', '200$', 'https://www.revzilla.com/product_images/1381/5481/revit_airwave3_jacket_300x300.jpg'),
    createGear('Armored-tops', 'Alpinistar', 'Armored jacet', 'asaj33', 'Armored jacket', '250$', 'https://www.revzilla.com/product_images/0309/4127/alpinestars_bionic_action_jacket_black_750x750.jpg'),
    createGear('Armored-tops', 'Alpinistar', 'Armored jacet', 'asaj33', 'Armored jacket', '250$', 'https://www.revzilla.com/product_images/0905/0370/alpinestars_viperv2_air_jacket_black_white_bright_red_300x300.jpg'),
    createGear('Armored-tops', 'Revit', 'Armored jacet', 'asaj33', 'Armored jacket', '200$', 'https://www.revzilla.com/product_images/1381/5481/revit_airwave3_jacket_300x300.jpg'),createGear('Armored-tops', 'Alpinistar', 'Armored jacet', 'asaj33', 'Armored jacket', '250$', 'https://www.revzilla.com/product_images/0309/4127/alpinestars_bionic_action_jacket_black_750x750.jpg'),
    createGear('Armored-tops', 'Alpinistar', 'Armored jacet', 'asaj33', 'Armored jacket', '250$', 'https://www.revzilla.com/product_images/0905/0370/alpinestars_viperv2_air_jacket_black_white_bright_red_300x300.jpg'),
    createGear('Armored-tops', 'Revit', 'Armored jacet', 'asaj33', 'Armored jacket', '200$', 'https://www.revzilla.com/product_images/1381/5481/revit_airwave3_jacket_300x300.jpg'),
    createGear('Gloves', 'Alpinistar', 'Summer gloves', 'asaj12', 'Gloves', '50$', 'https://www.revzilla.com/product_images/0333/6478/dainese_full_metal6_gloves_300x300.jpg'),    
    createGear('Gloves', 'Held', 'Leater Gloves', 'asaj12', 'Gloves', '40$', 'https://www.revzilla.com/product_images/0035/7008/Held-Air-n-Dry-Motorradhandschuh-schwarz_300x300.jpg'),    
    createGear('Gloves', 'Alpinistar', 'Race Gloves', 'asaj12', 'Gloves', '70$', 'https://www.revzilla.com/product_images/1376/4294/dainese_carbon3_gloves_flame_orange_blue_iris_300x300.jpg'),    
    createGear('Gloves', 'Daines', 'Summer gloves', 'asaj12', 'Gloves', '50$', 'https://www.revzilla.com/product_images/1519/7922/sedici_chicane_gloves_750x750.jpg'),    
    createGear('Gloves', 'Alpinistar', 'Summer gloves', 'asaj12', 'Gloves', '50$', 'https://www.revzilla.com/product_images/1519/7922/sedici_chicane_gloves_750x750.jpg'),
    createGear('Gloves', 'Alpinistar', 'Summer gloves', 'asaj12', 'Gloves', '50$', 'https://www.revzilla.com/product_images/0333/6478/dainese_full_metal6_gloves_300x300.jpg'),    
    createGear('Gloves', 'Held', 'Leater Gloves', 'asaj12', 'Gloves', '40$', 'https://www.revzilla.com/product_images/0035/7008/Held-Air-n-Dry-Motorradhandschuh-schwarz_300x300.jpg'),    
    createGear('Gloves', 'Alpinistar', 'Race Gloves', 'asaj12', 'Gloves', '70$', 'https://www.revzilla.com/product_images/1376/4294/dainese_carbon3_gloves_flame_orange_blue_iris_300x300.jpg'),    
    createGear('Gloves', 'Daines', 'Summer gloves', 'asaj12', 'Gloves', '50$', 'https://www.revzilla.com/product_images/1519/7922/sedici_chicane_gloves_750x750.jpg'),    
    createGear('Gloves', 'Alpinistar', 'Summer gloves', 'asaj12', 'Gloves', '50$', 'https://www.revzilla.com/product_images/1519/7922/sedici_chicane_gloves_750x750.jpg'), 
    createGear('Race-suits', 'Alpinistar', 'Tech Air race', 'sdfas', 'air tech race suit', '1000$', 'https://www.revzilla.com/product_images/0907/7777/alpinestars_missile_race_suit_for_tech_air_race_black_red_300x300.jpg'),
    createGear('Race-suits', 'Dainese', 'Misano 2-D', 'sdfadfs', 'Miscao race suit', '1000$', 'https://www.revzilla.com/product_images/0907/7777/alpinestars_missile_race_suit_for_tech_air_race_black_red_300x300.jpg'),   
    createGear('Race-suits', 'Alpinistar', 'Tech Air race', 'sdfas', 'air tech race suit', '2500$', 'https://www.revzilla.com/product_images/0786/5317/dainese_misano2_d_air_perforated_race_suit_black_white_fluo_red_300x300.jpg'),   
    createGear('Race-suits', 'Alpinistar', 'GP Plus Venom', 'sdfaf2s', 'air tech GP V2 race suit', '2500$', 'https://www.revzilla.com/product_images/0786/5317/dainese_misano2_d_air_perforated_race_suit_black_white_fluo_red_300x300.jpg'),
    createGear('Race-suits', 'Alpinistar', 'Tech Air race', 'sdfas', 'air tech race suit', '1000$', 'https://www.revzilla.com/product_images/0907/7777/alpinestars_missile_race_suit_for_tech_air_race_black_red_300x300.jpg'),
    createGear('Race-suits', 'Dainese', 'Misano 2-D', 'sdfadfs', 'Miscao race suit', '1000$', 'https://www.revzilla.com/product_images/0907/7777/alpinestars_missile_race_suit_for_tech_air_race_black_red_300x300.jpg'),   
    createGear('Race-suits', 'Alpinistar', 'Tech Air race', 'sdfas', 'air tech race suit', '2500$', 'https://www.revzilla.com/product_images/0786/5317/dainese_misano2_d_air_perforated_race_suit_black_white_fluo_red_300x300.jpg'),   
    createGear('Race-suits', 'Alpinistar', 'GP Plus Venom', 'sdfaf2s', 'air tech GP V2 race suit', '2500$', 'https://www.revzilla.com/product_images/0786/5317/dainese_misano2_d_air_perforated_race_suit_black_white_fluo_red_300x300.jpg')      
];

const getGear = () => {
    return gearArray;
}