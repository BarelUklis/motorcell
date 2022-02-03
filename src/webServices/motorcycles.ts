export {getMotorcycles, Motorcycle};

class Motorcycle {
    id: string;
    company: string;
    model:string;
    type:string; 
    style:string;
    year:number;
    engine:string;
    power:string;
    gears:number;
    pic:string;
    logo:string;
    discription:string;

    constructor(id:string, company: string, model:string, type:string, style:string, year:number, engine:string, power:string, gears:number, pic:string, logo:string,     discription:string
        ) {
        this.id = id;
        this.company = company;
        this.model = model;
        this.type = type;
        this.style = style;
        this.year = year;
        this.engine = engine;
        this.power = power;
        this.gears = gears;
        this.pic = pic;
        this.logo = logo;
        this.discription = discription;
    }
};

const createMotorcycle = (id:string, company: string, model:string, type:string, style:string, year:number, engine:string, power:string, gears:number, pic:string, logo:string, discription:string): Motorcycle => {
    return {id:id, company:company, model:model, type:type, style:style, year:year, engine:engine, power:power, gears:gears, pic:pic, logo:logo, discription}
}

const logos = [
    {company: 'Yamaha', link: 'https://www.freepnglogos.com/uploads/yamaha-png-logo/stickers-yamaha-png-logo-4.png'},
    {company: 'Kawasaki', link: 'https://seeklogo.com/images/K/kawasaki-logo-93A4815BBF-seeklogo.com.png'},
    {company: 'Suzuki', link: 'https://www.freepnglogos.com/uploads/suzuki-png-logo/suzuki-vector-logo-png-10.png'},
    {company: 'Honda', link: 'https://www.freepnglogos.com/uploads/honda-logo-png/honda-logo-png-transparent-svg-vector-5.png'}
];

const motorcyclesArray:Motorcycle[] = [
    createMotorcycle('ymt2020', 'Yamaha', 'MT-09', 'Motorcycles', 'Naked', 2020, '889cc', '119hp', 6, 'https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2022/9e5009d2-d988-465f-9171-13b374a95fd7.png', logos[0].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('kawasakiz6502020', 'Kawasaki', 'Z-650', 'Motorcycles', 'Naked', 2020, '650cc', '90hp', 6, 'https://content2.kawasaki.com/ContentStorage/KMC/Products/8397/9a179a32-32ba-4e67-98ee-0c186ad32be6.png?w=767', logos[1].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('kawasakiz9002020', 'Kawasaki', 'Z-900', 'Motorcycles', 'Naked', 2020, '900cc', '130hp', 6, 'https://content2.kawasaki.com/ContentStorage/KMC/Products/8398/cfa5f390-da71-439b-b106-26a10447872d.png?w=767', logos[2].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('suzukermx1002020', 'Suzuki', 'RMX450Z', 'Motorcycles', 'Offroad', 2020, '550cc', '40hp', 5, 'https://suzukicycles.com/-/media/project/cycles/images/products/motorcycles/rmx450z/2019/gallery/rmx450zl9_yu1_r_web_wide.png?mh=500&mw=768&hash=FB385D961890DE422F3477B489C11AFF', logos[2].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('suzukuvs1002020', 'Suzuki', 'C-STROM XT', 'Motorcycles', 'Adventure', 2020, '1000cc', '100hp', 6, 'https://suzukicycles.com/-/media/project/cycles/images/products/motorcycles/dl1050xa-vstrom1050xt/2020/gallery/v-strom-1050xt---yellow-blue---right-d_f.png?mh=500&mw=768&hash=B7B6E35F81801D0B8E4DE777DBA730E0', logos[2].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('suzukugsxr7502020', 'Suzuki', 'GSX-R750R', 'Motorcycles', 'Sport', 2020, '750cc', '140hp', 6, 'https://suzukicycles.com/-/media/project/cycles/images/products/motorcycles/gsx-r750/2022/gallery/gsx-r750m2_b9e_diagonal_gallery_2400x1600.png?mh=500&mw=768&hash=A84AA24C9817357089D7AF954198481D', logos[2].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('yamahascooter123', 'Yamaha', 'XMAX300', 'Scooters', '250cc', 2020, '300cc', '34hp', 6, 'https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2022/3d367ce2-40c7-43f8-b843-89e958cc18a6.png', logos[0].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('hondascooter123', 'Honda', 'PCX', 'Scooters', '250cc', 2020, '250cc', '30hp', 6, 'https://powersports.honda.com/-/media/products/family/pcx/trims/trim-main/pcx/2021/2021-pcx-pearl_white-650x380.png', logos[3].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('hondamotor1', 'Honda', 'CB650R ABS', 'Motorcycles', 'Naked', 2020, '650cc', '100hp', 6, 'https://powersports.honda.com/street/standard/-/media/products/family/cb650r/trims/trim-main/cb650r-abs/2021/2021-cb650r-abs-matte_black_metallic-650x380.png', logos[3].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('hondamotor21', 'Honda', 'CB1000R BLACK EDITION', 'Motorcycles', 'Naked', 2021, '1000cc', '130hp', 6, 'https://powersports.honda.com/street/standard/-/media/products/family/cb1000r/trims/trim-main/cb1000r-black-edition/2021/2021-cb1000r-black-edition-graphite_black-650x380.png', logos[3].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('hondamotor341', 'Honda', 'CB500F ', 'Motorcycles', 'Naked', 2020, '500cc', '60hp', 5, 'https://powersports.honda.com/street/sport/-/media/products/family/cb500f/trims/trim-main/cb500f-abs/2021/2021-cb500f-abs-darkness_black_metallic-650x380.png', logos[3].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
    createMotorcycle('hondamotor12', 'Honda', 'CB300R', 'Motorcycles', 'Naked', 2020, '300cc', '40hp', 5, 'https://powersports.honda.com/street/standard/-/media/products/family/cb300r/trims/trim-main/cb300r-abs/2022/2022-cb300r-abs-matte_pearl_blue-650x380.png', logos[3].link, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, inventore rem incidunt minima tenetur velit consequuntur eaque harum, repellendus tempore veritatis quidem blanditiis reiciendis ullam id maiores earum ex officia odio. Sit accusantium dolore eligendi vitae minus similique, rem repellendus aliquam iure quaerat voluptatem perspiciatis quasi id necessitatibus adipisci.'),
];
const getMotorcycles = () => {
    return motorcyclesArray;
} 
