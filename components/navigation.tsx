import React from 'react'
import { Navbar,
         Input, 
         Link, 
         Text,
         Button,
         Avatar,
        Dropdown
         } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import CartIcon from './cartIcon'
const AppBar = () => {
     const collapseItems = [
     "Women",
     "Man",
     "Boys",
     "New Arrivals",
     "Fragrance",
     "Sale"
     ];

  return ( 
  <>
      <Navbar  variant="floating"  >
        <Navbar.Toggle showIn={"xs" && "sm"} />
        <Navbar.Brand 
          css={{
            "@xs": {
              w: "5%",
            },
          }}
        >
          <Link href="/">
           <Text b color="secondary" size={25} hideIn={'xs'}>
            EDDY
           </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn={"xs" && "sm"}
          variant="highlight"
        > 
         <Dropdown placement="bottom" >
          <Navbar.Item >
            <Dropdown.Trigger>
             <Button light auto >Women</Button>
            </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
             aria-label="women"
             css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "40px",
              "& .nextui-dropdown-item": {
                py: "$4",
              // dropdown item title
              "& .nextui-dropdown-item-content": {
                w: "100%",
                fontWeight: "$semibold",
              },
            },
             }}
            >
              <Dropdown.Item
                key="unstitched"
              >
                Unstitched
              </Dropdown.Item>
              <Dropdown.Item
              key="readytowear"
              >
              Ready to wear
              </Dropdown.Item>
              <Dropdown.Item
              key="sale"
              >
              Sale
              </Dropdown.Item>
              <Dropdown.Item
              key="viewallwomen"
              >
                View All Women
              </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
           
           {/* Man */}

          <Dropdown placement="bottom">
          <Navbar.Item >
            <Dropdown.Trigger>
             <Button light auto >Men</Button>
            </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
             aria-label="men"
             css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "40px",
              "& .nextui-dropdown-item": {
                py: "$4",
              // dropdown item title
              "& .nextui-dropdown-item-content": {
                w: "100%",
                fontWeight: "$semibold",
              },
            },
             }}
            >
              <Dropdown.Item
                key="ethnicwear"
              >
                Ethnic Wear
              </Dropdown.Item>
              <Dropdown.Item
              key="shirts"
              >
              Shirts
              </Dropdown.Item>
              <Dropdown.Item
              key="tshirts"
              >
              T-Shirts
              </Dropdown.Item>
              <Dropdown.Item
              key="Ceremonial"
              >
                Ceremonial
              </Dropdown.Item>
              <Dropdown.Item
              key="winterwear"
              >
                Winter Wear
              </Dropdown.Item>
              <Dropdown.Item
              key="sale"
              >
                Sale
              </Dropdown.Item>
              <Dropdown.Item
              key="pants"
              >
                Pants
              </Dropdown.Item>
              <Dropdown.Item
              key="poloshirts"
              >
                Polo Shirts
              </Dropdown.Item>
              <Dropdown.Item
              key="viewallmen"
              >
                View All Men
              </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

           {/* Boys */}

        <Dropdown placement="bottom">
          <Navbar.Item >
            <Dropdown.Trigger>
             <Button light auto  >
                 Boys
             </Button>
            
            </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
             aria-label="boys"
             css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "40px",
              "& .nextui-dropdown-item": {
                py: "$4",
              // dropdown item title
              "& .nextui-dropdown-item-content": {
                w: "100%",
                fontWeight: "$semibold",
              },
            },
             }}
            >
              <Dropdown.Item
                key="ethnicwear"
              >
                Ethnic Wear
              </Dropdown.Item>
              <Dropdown.Item
              key="shirts"
              >
              Western Tops
              </Dropdown.Item>
              <Dropdown.Item
              key="tshirts"
              >
              Western Bottoms
              </Dropdown.Item>
              <Dropdown.Item
              key="Ceremonial"
              >
                Ceremonial
              </Dropdown.Item>
              <Dropdown.Item
              key="winterwear"
              >
                Winter Wear
              </Dropdown.Item>
              <Dropdown.Item
              key="sale"
              >
                Sale
              </Dropdown.Item>
             
              <Dropdown.Item
              key="viewallboys"
              >
                View All Boys
              </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            {/* Girls */}

         <Dropdown placement="bottom">
          <Navbar.Item >
            <Dropdown.Trigger>
             <Button light auto  >
                 Girls
             </Button>
            
            </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
             aria-label="girls"
             css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "40px",
              "& .nextui-dropdown-item": {
                py: "$4",
              // dropdown item title
              "& .nextui-dropdown-item-content": {
                w: "100%",
                fontWeight: "$semibold",
              },
            },
             }}
            >
              <Dropdown.Item
                key="tops"
              >
                Tops
              </Dropdown.Item>
              <Dropdown.Item
              key="bottoms"
              >
              Bottoms
              </Dropdown.Item>
              <Dropdown.Item
              key="winterwear"
              >
              Winter Wear
              </Dropdown.Item>
              <Dropdown.Item
              key="sale"
              >
                Sale
              </Dropdown.Item>
              <Dropdown.Item
              key="sweethearts"
              >
                SweetHearts
              </Dropdown.Item>
              <Dropdown.Item
              key="viewallgirls"
              >
                View all Girls
              </Dropdown.Item>
             
            </Dropdown.Menu>
            </Dropdown>

            {/* New Arrivals */}
          
            <Navbar.Item isActive>
          <Button light auto  >New Arrivals</Button>
          </Navbar.Item>

          {/* Fragrance */}
          
          <Dropdown placement="bottom">
          <Navbar.Item >
            <Dropdown.Trigger>
             <Button light auto  >
              Fragrance
             </Button>
            
            </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
             aria-label="frangrance"
             css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "40px",
              "& .nextui-dropdown-item": {
                py: "$4",
              // dropdown item title
              "& .nextui-dropdown-item-content": {
                w: "100%",
                fontWeight: "$semibold",
              },
            },
             }}
            >
              <Dropdown.Item
              key="perfumes"
              >
              Perfumes
              </Dropdown.Item>
              <Dropdown.Item
              key="deodorants"
              >
              Deodorants
              </Dropdown.Item>
              <Dropdown.Item
              key="viewallfragrances"
              >
              View All Fragrances
              </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            
            {/* Sale  Section */}

            <Dropdown placement="bottom">
          <Navbar.Item >
            <Dropdown.Trigger>
             <Button light auto  >
              Sale
             </Button>
            
            </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
             aria-label="sale"
             css={{
              $$dropdownMenuWidth: "340px",
              $$dropdownItemHeight: "40px",
              "& .nextui-dropdown-item": {
                py: "$4",
              // dropdown item title
              "& .nextui-dropdown-item-content": {
                w: "100%",
                fontWeight: "$semibold",
              },
            },
             }}
            >
              <Dropdown.Item
                key="women"
              >
                Women
              </Dropdown.Item>
              <Dropdown.Item
              key="men"
              >
              Men
              </Dropdown.Item>
              <Dropdown.Item
              key="boys"
              >
              Boys
              </Dropdown.Item>
              <Dropdown.Item
              key="girls"
              >
              Girls
              </Dropdown.Item>
              <Dropdown.Item
              key="view all items"
              >
              View All Items
              </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          
        </Navbar.Content>
        <Navbar.Content>
        <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16}  />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
          
          <Navbar.Item>
            <Button auto  light color="secondary"  icon={<CartIcon />}
            />
          </Navbar.Item>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  zoomed
                />
              </Dropdown.Trigger>   
            </Navbar.Item>
            
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  johnelder@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">My Orders</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
              My wishlist
              </Dropdown.Item>
              <Dropdown.Item key="system">Address book</Dropdown.Item>
              <Dropdown.Item key="configurations">Setting</Dropdown.Item>
              <Dropdown.Item key="create_an_account" withDivider>
                 Create new account
              </Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" >
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
       
        <Navbar.Collapse>
           {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
            //   css={{
            //     color: index === collapseItems.length - 1 ? "$error" : "",
            //   }}
            //   isActive={index === 1}
              > 
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default AppBar