  
  
    var coin = 10000000;
    

    
    function showInventory(){
        document.getElementById('toggleInventory').classList.remove('hidden');
       
    }
    function hideInventory(){
        document.getElementById('toggleInventory').classList.add('hidden');
        
    
    }
    var inventoryContent = '';
    function add(itemAdded, coinChange){
        inventoryContent += itemAdded
        coin += coinChange
        document.getElementById('inventoryDiv').innerHTML=inventoryContent;
        document.getElementById('coin_status').innerHTML=coin;
    }




