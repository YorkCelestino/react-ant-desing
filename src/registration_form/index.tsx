import React, {Fragment, useState } from 'react';
import './formStyle.css';
import { Layout, Steps,Button, message} from 'antd';
import GeneralDataForm from './components/generalDataForm';
import ExposedPerson from './components/exposedPerson';
import RegistrationInformation from './components/registrationInformation';
import AddressesContacts from './components/addressesContacts';
import { ArrowRightOutlined } from '@ant-design/icons';

const {Content}  = Layout;
const {Step} = Steps;

const RegistrationForm = () => {
    const [current,setCurrent] = useState<number>(0);
    const  next = ()=>{
        const count = current +1;
        setCurrent(count);
    }
    const  prev = ()=>{
        const count = current -1;
        setCurrent(count);
    }
    const steps = [
        {
            title: 'Datos generales',
            description:'Infórmacion básica',
             content: <GeneralDataForm onNext={next}/>
        },
        {
            title: 'Ingresos',
             description:'Infórmacion de ingreso',
             content:<RegistrationInformation/>
        },
        {
            title:'Peps',
            description:'persona Expuesta Políticamente',
            content:<ExposedPerson/>
        },
        {
            title: 'Direcciones y contactos',
             description:'Direcciones Telefonos y/o redes sociales',
             content:<AddressesContacts/>
        }
    ];
    

   
    
    return (
        <Fragment>
            <br/><br/>
            <Content style={{ padding: '0 50px'}}>
                
                <div className="site-layout-content">
                     {/* Steps */}
                    <div>
                      <Steps current={current}>
                         {
                           steps.map(items => ( <Step key={items.title} title={items.title} description={items.description}/>))
                        }
                       </Steps>
                    </div>
                   

                   {/* Froms */}
                   <div>
                       {steps[current].content}
                    </div>
                  
                   {/* Acctions */}
                   <div style={{position:'relative', bottom:'27px',left:'-660px'}}>
                        {current > 0 && (
                            <Button type='default' onClick={() => prev()}>Regresar</Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type='primary' style={{ margin: '0 8px' }} onClick={() => message.success('Completed')}>Terminar</Button>
                        )}
                        {current > 0 && (
                            <Button type='primary' style={{ margin: '0 8px' }} onClick={() => next()} icon={<ArrowRightOutlined />}>Siguiente</Button>
                        )}
                  </div>
                </div>
            </Content>
        </Fragment>
        
    );

}


export default RegistrationForm;
