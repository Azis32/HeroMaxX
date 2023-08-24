cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

        apb = MUI.CreateAppBar("HeroMax","",  "more_vert")
        apb.SetOnMenuTouch(OnMenuTouch)
        apb.SetOnControlTouch(OnControlTouch)

     
    layVert = app.CreateLayout( "Linear", "Vertical,FillXY" );

    btnA = app.CreateButton( "A", 0.6, 0.1);
    layVert.AddChild( btnA );

    layHoriz = app.CreateLayout( "Linear", "Horizontal" );
    layVert.AddChild( layHoriz );

         lay.AddChild( layVert )        
         tab = MUI.CreateTabFixed("Contacts,Import File,Import Manual", 1, 0.75, "FillXY,vertical")

        songsLay = tab.GetLayout("Contacts")
          layz= app.CreateLayout( "Linear", "Horizontal" );
    songsLay.AddChild( layz );

        tef = MUI.CreateTEFilledIconLeft(0.27,"Left", "search", "search name ", true)
       
        layz.AddChild(tef)
 
     
         var list = "Contains,Select All"
        rad = MUI.CreateRadioMaterial(list, 0.5, null, "Horizontal")
       layz.AddChild(rad)
       
       bt= app.CreateButton("Export Contact To CSV",1,0.07  )
       
       songsLay.AddChild(bt)
        var list = [
            {title: "andi tkr", body:"+6281321538904"},
            {title: "asep oget", body:"+6287716747700"},
       {title: "anjayani", body:"+6281321554243"},
            {title: "rika", body:"+6287715672780"},
            {title: "dery3", body:"+6281908736334"}
        ]

        sm = MUI.CreateListModern(list, 1, null, "Initial,Selectable")
        
        songsLay.AddChild(sm)
     
       
        albumsLay = tab.GetLayout("Import File")
      
        btn = MUI.CreateButtonRoundO("Import CSV or TXT", 0.6)
       
        albumsLay.AddChild(btn)

        artistLay = tab.GetLayout("Import Manual")
      
              layz= app.CreateLayout( "Linear", "Horizontal" );
artistLay.AddChild(layz)
  spin = MUI.CreateSpinner( "ID +62", 0.25,0.089);
  
    
   
    layz.AddChild( spin );
     tef = MUI.CreateTextEditUnique(0.8, "Left", "type manualy or paste here")
     tef.SetBackColor("grey")
        layz.AddChild(tef)
          bt=app.CreateButton( "Add To Campaigh List" ,1,0.1)

        artistLay.AddChild( bt )
        layVert.AddChild(tab)
        
        
              lyz= app.CreateLayout( "Linear", "Horizontall,vcenter" );        
              u=6
              y= app.CreateText( "    Total Numbers                :  "+u )
              lyz.AddChild( y )
                      rad = MUI.CreateRadio("Delete double contact")
               
                      rad.SetTextSize(13)
       lyz.AddChild(rad)
       
              
  layVert.AddChild( lyz )      
        b=app.CreateButton( "NEXT" ,1,0.1)
        
        layVert.AddChild( b )

        lay.AddChild(apb)

    app.AddLayout(lay)
var list = "Select Sender, Settings,Account Treatment,Auto Reply,Grab Chat List,Grab Group Members,Group Campaign,Contact List,Group List,Remove Autosaved Contacts,Tutorial,License Management,Buy License,Support,Info Update, About App"
    lst = MUI.CreateMenu(list, null, null, "Top, Right")
    lst.SetOnSelect(OnSelect)
}

function ShowMenu()
{
    lst.Show()
}

function OnSelect(choice)
{
    app.ShowPopup(choice)
}
function OnMenuTouch()
{
    app.ShowPopup("You click the menu. Might as well display a drawer.")
}

function OnControlTouch(text, index)
{
 ShowMenu()
}