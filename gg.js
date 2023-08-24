cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        spn = MUI.CreateSpinner("Item 1, Item 2, Item 3", 0.6, 0.1)
        spn.SetOnChange(OnChange)
        lay.AddChild(spn)

    app.AddLayout(lay)
}

function OnChange(value, index)
{
    app.ShowPopup(value)
}