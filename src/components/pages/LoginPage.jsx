import React from "react";
import {
  View,
  Page,
  Toolbar,
  LoginScreen,
  ListInput,
  ListItem,
  LoginScreenTitle,
  Block,
  Col,
  Row,
  Button,
  List,
  Label,
  BlockFooter
} from "framework7-react";
export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginType: "AD",
      remember: false,
      valid: false
    };
  }
  validate =()=>{
    // if(this.state.username === "" && this.state.password === "") this.setState({valid:false})
    // else this.setState({valid:true})
    if(this.state.username !== "" && this.state.password !== "") this.setState({valid:true})
    else this.setState({valid:false})
  }
  componentDidMount(){
    this.validate();
  }
  render() {
    return (
      <LoginScreen id="login-screen">
        <View>
          <Page loginScreen onPageInit={(event, page) => {}}>
            <LoginScreenTitle textColor="white" bgColor="blue">
              Đăng nhập
            </LoginScreenTitle>

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
                  onChange={({ target }) =>
                    this.setState({ loginType: target.value })
                  }
                >
                  <option value="AD">Tài khoản máy tính (AD)</option>
                  <option value="COREFCC">
                    Tài khoản CORE FCC (nếu TK máy tính khác TK CORE FCC)
                  </option>
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
                    value={this.state.username}
                    onChange={({ target }) =>{
                      this.setState({ username: target.value },this.validate);
                    }
                    }
                    onInputClear={() =>{
                      this.setState({ username: "" },this.validate)
                    }}
                  />
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
                    value={this.state.password}
                    onChange={({ target }) =>{
                      this.setState({ password: target.value },this.validate);
                    }
                    }
                    onInputClear={() =>{
                      this.setState({ password: "" },this.validate)
                    }}
                  />
                  <ListItem 
                    checkbox
                    onChange={()=>{
                        this.setState({remember: !this.state.remember})
                      }
                    }
                    checked={this.state.remember}
                    title="Ghi nhớ tài khoản"
                     />
                </List>
                <Block>
                  <Row>
                    <Col>
                      <Button
                        big
                        fill
                        disabled={!this.state.valid}
                        onClick={() => {
                          // this.props.onLogin()
                          console.log(this.state);
                        }}
                      >
                        Đăng nhập
                      </Button>
                    </Col>
                    <Col>
                      <Button big fill>
                        Đổi mã đơn vị FCC
                      </Button>
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
                {this.$f7.version}
              </BlockFooter>
            </Toolbar>
          </Page>
        </View>
      </LoginScreen>
    );
  }
}
