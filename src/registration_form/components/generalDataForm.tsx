import React from 'react';
import {Divider, Row, Col, Input, Radio, Form, Button, Select, DatePicker } from 'antd';
import  {PlusOutlined} from '@ant-design/icons';
import { ArrowRightOutlined } from '@ant-design/icons';
const {Option} = Select;


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };



const GeneralDataForm =  (props:any )=>{
    const {onNext}=props;
    const onFinish = (event:any) => {
        console.log('Success:', event);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        const element =  document.getElementById('next');
        element?.click();
      };
    
      const onFinishFailed = (errorInfo:any) => {
        console.log('Failed:', errorInfo);
      };
    return(
      <div>
          <Divider orientation="left">
                <h3>
                    Datos Generales
                </h3>
            </Divider>
            <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
               <Row gutter={[15,15]}>
                     {/* Colum 1 */}
                    <Col span ={12} >
                            <Form.Item
                                label="Codigo"
                                name="codigo"

                            >
                                <Input placeholder='Codigo de la persona' disabled  />
                            </Form.Item>

                            <Form.Item
                            name="Documento"
                            label="Tipo de documento" 
                            rules={[{ required: true, message: 'Este capo es requerido!' }]}
                                style ={{position:'relative'}}
                            >
                                <Radio.Group style={{marginRight:'240px'}}>
                                    <Radio value="cedula">Cedula</Radio>
                                    <Radio value="pasaporte">Pasaporte</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="Nombre(s)"
                                name="nombre"
                                rules={[{ required: true, message: 'Este capo es requerido!' }]}
                            >
                                <Input placeholder='Nombre(s)'/>
                            </Form.Item>

                            <Form.Item
                                label="Apodo"
                                name="apodo"    
                            >
                                <Input placeholder='Apodo(opcional)' />
                            </Form.Item>

                            <Form.Item
                                label="Lugar de nac"
                                name="nac"
                                rules={[{ required: true, message: 'Este capo es requerido!' }]}
                            >
                                <Input placeholder='Lugar de nacimiento'/>
                            </Form.Item>

                            <Form.Item
                            name="sexo"
                            label="Sexo" 
                            rules={[{ required: true, message: 'Este capo es requerido!' }]}
                            style ={{position:'relative'}}
                            >
                                <Radio.Group style={{marginRight:'220px'}}>
                                    <Radio value="a">Masculino</Radio>
                                    <Radio value="b">Femenino</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                name="categotia"
                                label="Categoria solisitada"
                                hasFeedback
                                rules={[{ required: true, message: 'Este capo es requerido!' }]}
                                style={{textAlign:'start'}}
                            >
                                <Select placeholder="Selecciona una categoria">
                                    <Option value="china">1</Option>
                                    <Option value="usa">2</Option>
                                </Select>
                            </Form.Item>
                            <div style={{position:'relative', bottom:'-11px',right:'300px'}}>
                                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                                    <Button type="primary" htmlType="submit" icon={<ArrowRightOutlined />} >
                                        Siguiente
                                    </Button>
                            </Form.Item>
                            </div>
                           <button id='next' hidden onClick={onNext}>Click me</button>

                        </Col>

                        {/* Colum 2 */}
                        <Col span ={12} style={{position:'relative',top:'62px',marginLeft:'-54px'}}>
                            <div >
                                <Form.Item
                                    label="Doc Indentidad"
                                    name="docIndentificacion"
                                    rules={[{ required: true, message: 'Este capo es requerido!' }]}
                                >
                                    <Input placeholder='Elige el tipo de documento (Cedula o pasaporte)' />
                                </Form.Item>

                                <Form.Item
                                    label="Apellido(s)"
                                    name="apellido"
                                    rules={[{ required: true, message: 'Este capo es requerido!' }]}
                                >
                                    <Input placeholder='Apellido(s)'/>
                                </Form.Item>

                                <Form.Item
                                    name="nacionalidad"
                                    label="Nacionalidad"
                                    hasFeedback
                                    rules={[{ required: true, message: 'Este capo es requerido!' }]}
                                    style={{textAlign:'start'}}
                                    >
                                        <Select placeholder="Selecciona una Nacionalidad">
                                            <Option value="dominicana">Dominicana</Option>
                                            <Option value="española">Española</Option>
                                        </Select>
                                </Form.Item>

                                <Form.Item name="FechaNacimiento" label="Fecha de nacimiento" rules= {[{ type: 'object', required: true, message: 'Please select time!' }]}>
                                     <DatePicker style={{position:'relative', right:'144px'}}/>
                                </Form.Item>

                                <Form.Item
                                    name="radio-group"
                                    label="Estado Civil" 
                                    rules={[{ required: true, message: 'Este capo es requerido!' }]}
                                    style ={{position:'relative'}}
                                >
                                    <Radio.Group style={{marginRight:'223px'}}>
                                        <Radio value="soltero">Soltero(a)</Radio>
                                        <Radio value="casado">Casado(a)</Radio>
                                    </Radio.Group>
                                </Form.Item>

                                <Button style={{position:'relative', left:'270px'}} type="primary" icon={<PlusOutlined />}>Agregar seleccionado</Button>
                                
                            </div>
                        </Col>
                
                 </Row> 
            </Form>
      </div>
    );
}
export default GeneralDataForm;
