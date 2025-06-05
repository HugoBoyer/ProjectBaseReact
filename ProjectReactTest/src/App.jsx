import {createPortal} from "react-dom"
import { useEffect } from "react"
import { useRef } from "react"
import { use, useState } from "react"
import { Checkbox } from "./components/form/Checkbox"
import { useToggle } from "./components/hooks/useToggle"
import { Input } from "./components/form/Input"
import { InputLogin } from "./components/form/InputLogin"
import { InputRange } from "./components/form/InputRange"
import { Text } from "./components/form/Text"
import { ProductCategoryRow } from "./components/productsPage/productTable/ProductCategoryRow"
import { ProductRow } from "./components/productsPage/productTable/ProductRow"
import { useIncrement } from "./components/hooks/useIncrement"
import { useDocumentTitle } from "./components/hooks/useDocumentTitle"
import { useFetch } from "./components/hooks/useFetch"
import { useCallback } from "react"
import  './components/styles/Scroll.css'
import { PageFeat } from "./components/Feat/PageFeat"
import { ProductsPage } from "./components/productsPage/productsPage"




function App() {


  return (
    <>
    <div className="classScroll">
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente ipsa quo id aliquam recusandae, doloremque aut, repudiandae maxime eum blanditiis natus hic omnis dicta minus dolorem perspiciatis veritatis necessitatibus?
      </p>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente ipsa quo id aliquam recusandae, doloremque aut, repudiandae maxime eum blanditiis natus hic omnis dicta minus dolorem perspiciatis veritatis necessitatibus?
        Natus unde atque dolorum molestias eligendi quia eos in quaerat voluptatum minus omnis corrupti iste sint, ea rem quod fuga ut, earum accusamus doloremque itaque minima mollitia corporis. Eveniet, dolor.
        Eos dolor qui rerum voluptates laudantium magnam beatae vero deserunt ducimus deleniti nostrum molestiae incidunt officia ad
      </p>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente ipsa quo id aliquam recusandae, doloremque aut, repudiandae maxime eum blanditiis natus hic omnis dicta minus dolorem perspiciatis veritatis necessitatibus?
      </p>
      <Modal />
    </div>
      <PageFeat />
      <ProductsPage />
    </>
  )
}

function Modal() {
  return createPortal(<div style={{
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    border: 'solid 1px grey',
    background: "#FFF"
  }}>
    Je suis une modale
  </div>, document.body)
}



export default App
