import React from 'react';
import { View, Page, Toolbar, LoginScreen, ListInput ,ListItem, LoginScreenTitle, Block, Col, Row, Button, List, Label, BlockFooter } from 'framework7-react';
export default ({ onUsernameUpdated, onPasswordUpdated, onLogin,onValidation, username, password, valid}) => (
  <LoginScreen id="login-screen">
    <View>
      <Page 
        loginScreen 
        onPageInit={
          (event, page)=>{
            const that = page.app;
            that.$("#footer").html(that.params.version);
          }
        }
      >
        <LoginScreenTitle textColor="white" bgColor="blue">Đăng nhập</LoginScreenTitle>
        
        <List>
          <List>
          <ListInput
            label="Mã đơn vị FCC (Đủ 3 ký tự)"
            type="text"
            placeholder="001"
          >
            <Label>Mã đơn vị FCC (Đủ 3 ký tự)</Label>
          </ListInput>
          <ListInput
            label="Đăng nhập bằng TK"
            type="select"
            defaultValue="AD"
            placeholder="Chọn..."
          >
            <option value="AD">Tài khoản máy tính (AD)</option>
            <option value="COREFCC">Tài khoản CORE FCC (nếu TK máy tính khác TK CORE FCC)</option>
          </ListInput>
          <List form>
          <ListInput
            required
            validate
            errorMessage="Bạn chưa nhập tên đăng nhập"
            clearButton
            label="Tên đăng nhập"
            type="text"
            name="username"
            placeholder="Username"
            inlineLabel
            onChange={({ target }) => onUsernameUpdated(target.value)}
          >
          </ListInput>
          <ListInput
            required
            validate
            errorMessage="Bạn chưa nhập mật khẩu"
            clearButton
            label="Mật khẩu"
            inlineLabel
            name="password"
            type="password"
            placeholder="Password"
            onChange={({ target }) => onPasswordUpdated(target.value)}
          >
          </ListInput>
          <ListItem checkbox title="Ghi nhớ mật khẩu">
          </ListItem>
        </List>
          <Block>
  <Row>
    <Col>
      <Button big fill disabled={valid} onClick={()=>onLogin()}>Đăng nhập</Button>
    </Col>
    <Col>
      <Button big fill>Đổi mã đơn vị FCC</Button>
    </Col>
  </Row>
</Block>
          </List>
          {/* <ListButton title="Sign In" onClick={onLogin}></ListButton> */}
          {/* <BlockFooter>
            <p>Click Sign In to see if you entered the correct password</p>
          </BlockFooter> */}
        </List>
        <Toolbar bottomMd noShadow inner={false}>
        <BlockFooter id="footer" className="text-align-center">
          Phiên bản: 
        </BlockFooter>
        </Toolbar>
      </Page>
    </View>
  </LoginScreen>    
);
