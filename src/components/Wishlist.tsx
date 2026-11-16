import { Item, ItemContent, ItemDescription, ItemMedia } from "./ui/item";

export default function Wishlist() {
  return (
    <ol className="space-y-4">
      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://image.alza.cz/products/MG125e2e1/MG125e2e1.jpg?width=800&height=800"
            alt="logitech mx master 3s"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">
            Logitech MX Master 3S
          </h3>
          <ItemDescription>
            <a
              href="https://www.alza.hu/logitech-mx-master-3s-universal-graphite-d7438602.htm?o=4"
              target="_blank"
            >
              Link.
            </a>
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="/alza-ajandekutalvany.png"
            alt="alza ajándékutalvány"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">
            Alza.hu ajándékutalvány
          </h3>
          <ItemDescription>
            <a
              href="https://www.alza.hu/gaming/olcso-elektronikus-alza-utalvanyok/18907498.htm"
              target="_blank"
            >
              Link.
            </a>
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
            <a
              href="https://www.ikea.com/hu/hu/customer-service/payment-options/gift-cards/"
              target="_blank"
            >
              Link.
            </a>
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
            src="https://cdn3.centrecom.com.au/images/upload/0180111_0.jpeg"
            alt="wd red plus"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">WD Red Plus 4TB</h3>
          <ItemDescription>
            Csak a 4TB méret jó pls. Alza{" "}
            <a
              href="https://www.alza.hu/wd-red-plus-4tb-d7587417.htm"
              target="_blank"
            >
              4TB
            </a>
            , Heureka{" "}
            <a
              href="https://pevne-disky.heureka.sk/wd-red-plus-4tb-wd40efpx/#prehlad/"
              target="_blank"
            >
              4TB
            </a>
            .
          </ItemDescription>
        </ItemContent>
      </Item>

      <Item variant="outline" role="listitem" className="items-start">
        <ItemMedia variant="image" className="size-36">
          <img
            src="https://cdn.shopify.com/s/files/1/0254/0516/1520/files/logo.gif?v=1613717913"
            alt="kurzgesagt"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square rounded-full object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">
            Kurzgesagt shopból valami
          </h3>
          <ItemDescription>
            <a
              href="https://shop-eu.kurzgesagt.org/collections/infographic-posters"
              target="_blank"
            >
              Infografikus poszterek
            </a>
            , a{" "}
            <a
              href="https://shop-eu.kurzgesagt.org/collections/calendar/products/12-026-human-era-calendar?variant=55341282656633"
              target="_blank"
            >
              naptár
            </a>
            , vagy{" "}
            <a
              href="https://shop-eu.kurzgesagt.org/collections/clothes"
              target="_blank"
            >
              ruhák
            </a>
            .
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
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FHanes-Ultimate-Men-s-Boxer-Brief-Underwear-Ringer-Style-5-Pack-Assorted-2XL_cce1a5f3-a012-427f-9a6f-9e7dc426f4a5.2b7701c41c4da2dd1172726578a4a802.jpeg&f=1&nofb=1&ipt=63984a02b3cb0470dfb95c02a69a0ed593233e2348c96274ead071bd4ee0de68&ipo=images"
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
            src="https://trmnl.com/assets/section2-1-87c3614a.jpg"
            alt="trmnl e-ink tablet"
            width={144}
            height={144}
            loading="lazy"
            className="aspect-square object-cover"
          />
        </ItemMedia>
        <ItemContent className="gap-3">
          <h3 className="text-lg leading-snug font-bold">TRMNL e-ink tablet</h3>
          <ItemDescription>
            <a href="https://usetrmnl.com/" target="_blank">
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
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Featingisart.com%2Fwp-content%2Fuploads%2F2024%2F08%2Fcajun-spiced-roasted-pumpkin-seeds-recipe-1723131918.jpg&f=1&nofb=1&ipt=11fd37c8e6d58788a9400a524600991616775cf0c238c90d8c75a0ee279a7211&ipo=images"
            alt="tökmag"
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
            Granko, pigí čaj, slovakia paprika a rajčina chips, herbária epres
            vagy lime zöld tea, kinder csoki, tökmag, édesség.
          </ItemDescription>
        </ItemContent>
      </Item>
    </ol>
  );
}
