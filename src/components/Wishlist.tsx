import { Item, ItemContent, ItemDescription, ItemMedia } from "./ui/item";

export default function Wishlist() {
  return (
    <ol className="space-y-4">
      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://s3-eu-west-1.amazonaws.com/images.linnlive.com/4026ef0cc7c4844b9d335306aa30fe5c/10518fb3-0456-4c38-96f3-cface3d52092.jpg"
            alt="pulcsi"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">Kapucnis pulcsi</h3>
          <ItemDescription>
            L méret. Cipzáros vagy nem cipzáros, mindegy. Mindegy milyen színű.
            Fekete, piros és kék már van. Ne legyen rajta semmi. Kényelmes,
            igazi anyagból.
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://i5.walmartimages.com/seo/Oral-B-iO-Gentle-Care-Replacement-Heads-Electric-Toothbrush-Brush-Heads-Black-2-Count_56beb798-6c16-4834-ae06-6b151d449c8f.674ba7b5141654747fc21d9624ca08ba.jpeg"
            alt="fogkefe fej"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">Fogkefe fej</h3>
          <ItemDescription>
            Oral-B iO 4 fogkeféhez. "Gentle Care" típus preferált. Elég egy 4-es
            csomag és majd jövő karácsonyra is kérek még.
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://www.watchgecko.com/cdn/shop/products/watch-straps-vintage-highley-genuine-leather-watch-strap-reddish-brown-34686494736547_1066x.jpg?v=1661996709"
            alt="óraszíj"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">Óraszíj</h3>
          <ItemDescription>
            Igazi bőr, barna bőr (mint a cipőm), fekete bőr, fekete fém is
            lehet.
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://www.engguidebook.com/assets/images/EngGuidebook_cover.png"
            alt="the software engineer's guidebook"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">
            Orosz Gergely: The Software Engineer's Guidebook
          </h3>
          <ItemDescription>
            Könyv.{" "}
            <a href="https://www.engguidebook.com/" target="_blank">
              Link.
            </a>
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://i.pinimg.com/originals/11/b2/dc/11b2dc9f56df933dd3f5bf790d9e3409.jpg"
            alt="tepláky"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">Kinti tepláky</h3>
          <ItemDescription>
            L méret. Cipzáros zsebű, kint hordható. Mindegy milyen színű. Fekete
            már van. Kényelmes, igazi anyagból.
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://www.ikea.com/ext/ingkadam/m/32d01bb4555a9ef/original/GC-CF-IDServices-FY25-Multipleuse-Image-Christmas-04-4-3-crop001.jpg?f=xl"
            alt="ikea ajándékkártya"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">Ikea ajándékkártya</h3>
          <ItemDescription>
            <a href="https://www.ikea.com/hu/hu/customer-service/payment-options/gift-cards/">
              Link.
            </a>
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://ae01.alicdn.com/kf/H6db7d685cc23448ba94d2f11ca168728z/Men-s-Autumn-Summer-Socks-Classic-Patchwork-Mesh-Men-Short-Socks-Deodorant-Male-Sock-Casual-slippers.jpg"
            alt="zoknik"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">Rövid szárú zoknik</h3>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://www.siatex.com/wp-content/uploads/2023/02/Mens-Underwear-Boxer-Briefs.jpg.webp"
            alt="boxerek"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">Boxer alsók</h3>
          <ItemDescription>L méret. Kényelmes, igazi anyagból.</ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://branthorn.hu/cdn/shop/files/gempages_561171690445341786-eae957e7-993c-4509-bd0e-307118dc7495.gif?v=500136139664623077"
            alt="kés élező"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">Gurigázó kés élező</h3>
          <ItemDescription>
            Branthorn, de más márka is jó. Valószínűleg ezt is az aliexpressről
            dropshippelik.{" "}
            <a href="https://branthorn.hu/" target="_blank">
              Link.
            </a>
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia className="grid size-36 grid-cols-2 gap-1 overflow-hidden rounded-sm">
          <img
            src="https://cdn.myshoptet.com/usr/www.sladke-potreby.cz/user/shop/big/340169_holandske-kakao-granko-original-200g.png?673a380f"
            alt="granko"
            width={72}
            height={72}
            loading="lazy"
            className="aspect-square h-full w-full object-cover"
          />
          <img
            src="https://www.culinaryhill.com/wp-content/uploads/2023/03/A-Guide-to-Red-Wine-Culinary-Hill-LR-05.jpg"
            alt="bor"
            width={72}
            height={72}
            loading="lazy"
            className="aspect-square h-full w-full object-cover"
          />
          <img
            src="https://www.agrarkapu.hu/wp-content/uploads/2025/02/pisztacia-03-768x512.jpg"
            alt="pisztácia"
            width={72}
            height={72}
            loading="lazy"
            className="aspect-square h-full w-full object-cover"
          />
          <img
            src="https://www.woman.sk/wp-content/uploads/2011/07/pigicitron_3d.jpg"
            alt="pigí čaj"
            width={72}
            height={72}
            loading="lazy"
            className="aspect-square h-full w-full object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">
            Bármilyen fogyótermék
          </h3>
          <ItemDescription>
            Granko, pigí čaj, finom bor, herbária epres vagy lime zöld tea,
            édesség.
          </ItemDescription>
        </ItemContent>
      </Item>
    </ol>
  );
}
