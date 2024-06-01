
module wanderer::my_module {
    public struct Item has copy,store,drop {
        seller: address,
        level: u64,
        price:u64
    }


    public struct List has key,store{
        id: UID,
        item:u64,
        list: vector<Item>
    }

    public fun create_item( level: u64, price:u64, ctx: &mut TxContext): Item {
        Item {
            seller:ctx.sender(),
            level: level,
            price:price
        }
    }

    public fun create_list(item:u64,ctx: &mut TxContext){
        let l=List{
            id:object::new(ctx),
            item:item,
            list:vector::empty<Item>()
        };
        transfer::share_object(l);
    }

    public fun list_items(l: &mut List,level: u64,price:u64, ctx: &mut TxContext){
        let i=create_item(level,price,ctx);
        vector::push_back<Item>(&mut l.list, i);
    }

 
    public fun buy(l: &mut List,level: u64,price:u64,seller: address){
        let i=Item{
            seller:seller,
            price:price,
            level:level
        };
        let (b,k):(bool,u64)=vector::index_of<Item>(& l.list,&i);
        if(b){
            vector::remove<Item>(&mut l.list, k);
        }
    }


     public fun get_list(self: &List): vector<Item> {
        self.list
    }


    // #[test]
    // fun test_list_create() {
    //     use sui::test_scenario;
    //     // Create a dummy TxContext for testing
    //     let initial_owner = @0xCAFE;
    //     let mut scenario = test_scenario::begin(initial_owner);
    //     let mut l=create_list(1,scenario.ctx());
    //     //transfer::public_transfer(copy l, initial_owner);
    //     list_items(&mut l,1,10,scenario.ctx());
    //     list_items(&mut l,2,20,scenario.ctx());

    //     assert!((*vector::borrow(&l.list, 0)).level == 1, 42);
    //     assert!((*vector::borrow(&l.list, 1)).price == 20, 42);
    //     buy(&mut l,1,10,initial_owner, scenario.ctx());
    //     assert!((*vector::borrow(&l.list, 0)).level == 2, 42);
    //     assert!((*vector::borrow(&l.list, 0)).price == 20, 42);
    //     transfer::public_share_object(l);
    //     scenario.end();

    // }
}