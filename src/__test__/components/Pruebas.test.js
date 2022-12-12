import ProductItem from '../../components/product/ProductItem';
import { shallow,render,mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import React from 'react';
import {addToBasket} from '../../redux/actions/basketActions'
import { signIn } from 'redux/actions/authActions';
import SignIn from 'views/auth/signin/index';

// 
import firebaseInstance  from '../../services/firebase';
//
const storeMock=configureStore();





describe('prueba de integracion- Login',()=>{
  


  test('Login -Envio de user y pass ', () => {
    const mockS=storeMock()
    const email='odin1234';
    const password='1233333'
    mockS.dispatch(signIn(email,password))
    const actions = mockS.getActions();
    expect(actions[0].type).toEqual('SIGNIN');
    
  })
  test('Login -Envio de user y pass -sin email', () => {      
    const mockS=storeMock()  
    const email='test@gmail.com';
      const password='1233333'
      mockS.dispatch(signIn(null,password))
      const actions = mockS.getActions();
      expect(actions[0].type).toEqual('SIGNIN');
      expect(actions[0].payload).toEqual({email,password});

  })

  // test('Login -Por peticion a Firebase  ', () => {
  //   const email='test@gmail.com';
  //   const password='1233333'
  //   firebaseInstance.auth = jest.fn().mockReturnValue({
      
  //     signInWithEmailAndPassword: function(email,password) { return true; }
  //     });
  //   const wrapper = shallow(<SignIn  />)
  //   wrapper.find('input').at(0).simulate('change', { target: { value: email } });
  //   wrapper.find('input').at(1).simulate('change', { target: { value: password } });
  //   wrapper.find('form').simulate('submit', { preventDefault() {} });
  //   expect(firebaseInstance.auth).toHaveBeenCalled();
  //   expect(firebaseInstance.auth).toHaveBeenCalledWith(email,password);

  
  
  // });
     
    


 
  

  })

/////////////////////////////////////////////////////////////////
describe('prueba de integracion- Ver Productos',()=>{

test('Producto -item longitud- creando componente', () => {
    const wrapper =shallow(<ProductItem   product={{}}     />)
    expect(wrapper.find(".producto-test").length).toBe(1)
})

test('Producto - sin contenido contenido', () => {
  
//parametors para el mock 
const mockS=storeMock({product:{}})
//
  const wrapper =render(<ProductItem   product={mockS}     />)
  // expect(wrapper.find(".producto-test").length).toBe(1);
  const actions = mockS.getActions();
      expect(actions.length).toBe(0);
      // expect(actions[0].product).not.toBeNull();
})
test('Producto - con  contenido contenido', () => {
  const mockS=storeMock({product:{ 
  name: 'Testeo',
  brand: 'testing',
  price: 50,
  maxQuantity: 2,
  description: 'testing validacion',
  keywords: [],
  sizes: [],
  image: '',
  isFeatured: false,
  isRecommended: true,
  availableColors: [],
  imageCollection: []   
},

})
  const wrapper =render(<ProductItem   product={mockS}     />)
  expect(wrapper.find(".producto-test").length).toBe(1)
})

}),

//////////////////////////////////////////////////////////////////////////

describe('prueba de integracion- Carrito',()=>{

    test('Carrito -Agregar producto', () => {
      const mockS=storeMock({product:{}})
      const product={ 
        name: 'Testeo',
        brand: 'testing',
        price: 50,
        maxQuantity: 2,
        description: 'testing validacion',
        keywords: [],
        sizes: [],
        image: '',
        isFeatured: false,
        isRecommended: true,
        availableColors: [],
        imageCollection: []   
      }//modelado de un producto como mock para simular el envio de un producto
      mockS.dispatch(addToBasket(product));//enviamos el producto a la funcion addToBasket
      const actions = mockS.getActions();//obtenemos las acciones
      expect(actions.length).toBe(1);//comprobamos si tenemos una respuesta 
      expect(actions[0].type).toEqual('ADD_TO_BASKET');//esperamos la respuesta que sea igual a ADD_TO_BASKET
      expect(actions[0].product).not.toBeNull();//comprobamos que no sea nulo el producto
    })

    test('Carrito -Agregar producto-Click en el boton -Agregar al carrito', () => {
      const product={ 
        id:1,
        name: 'Testeo',
        brand: 'testing',
        price: 50,
        maxQuantity: 2,
        description: 'testing validacion',
        keywords: [],
        sizes: [],
        image: '',
        isFeatured: false,
        isRecommended: true,
        availableColors: [],
        imageCollection: []   
      }//modelado de un producto como mock para simular el envio de un producto
      const mockS=storeMock({product:{product}})
      const wrapper = shallow(<ProductItem product={{}}/>);
      
      wrapper.find('.botoncarrit-test').at(0).simulate('click');
      const textoRes = wrapper.find('.botoncarrit-test-btn').text().trim();
      expect(textoRes).toBe('Agregar al carrito');
    
    } )
    ////////////////////////////////////////////////////////////////////////////////////////

    test('Carrito -Agregar producto-Click en el boton-Eliminar del carrito', () => {
      const product={ 
        id:1,
        name: 'Testeo',
        brand: 'testing',
        price: 50,
        maxQuantity: 2,
        description: 'testing validacion',
        keywords: [],
        sizes: [],
        image: '',
        isFeatured: false,
        isRecommended: true,
        availableColors: [],
        imageCollection: []   
      }//modelado de un producto como mock para simular el envio de un producto
      const mockS=storeMock({product:{product}})
      const wrapper = shallow(<ProductItem product={{}}/>);
      
      wrapper.find('.botoncarrit-test').at(0).simulate('click');
      const textoRes = wrapper.find('.botoncarrit-test-btn').text().trim();
      expect(textoRes).not.toBe('Eliminar del carrito');
    
    } )





});

describe('Pruebas en <Producto />', () => {
      test('<Producto /> se renderiza bien', () => {
          
          const jsxHeader = shallow(<ProductItem product={{}}/>);
          // expect(jsxHeader).toMatchSnapshot();
      })
  
  });
   


  
  


  






  
