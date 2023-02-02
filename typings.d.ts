type Base = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updateAt: string;
};

interface Banner extends Base {
	buttonText: string;
	desc: string;
	product: Product;
	image: Array<Image>;
	smallText: string;
	link: string;
}

interface Category extends Base {
	name: string;
	image: Image;
	buttonText: string;
	link: string;
}

interface Product extends Base {
	category: Reference;
	des: string;
	features: Array<string>;
	image: Array<Image>;
	inTheBox: Array<InTheBox>;
	name: string;
	newProduct: boolean;
	price: number;
	productDesImage: Array<Image>;
	slug: Slug;
	smallText: string;
}

interface Image {
	_type: "image";
	asset: Reference;
}

interface Reference {
	_ref: string;
	_type: "reference";
}

interface InTheBox {
	amount: string;
	components: string;
}

interface Slug {
	_type: "slug";
	current: string;
}
