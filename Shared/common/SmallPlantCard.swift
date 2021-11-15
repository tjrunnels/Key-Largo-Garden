//
//  SmallPlantCard.swift
//  Key Largo Garden
//
//  Created by Tom Runnels on 11/12/21.
//

import SwiftUI

struct SmallPlantCard: View {
    var name: String
    var size: CGFloat
    
    let skyBlue = Color(red: 0.3627, green: 0.6392, blue: 1.0)
    var body: some View {
        //top level object.  Fixed size based on size arg
        Group {
            ZStack {
                Image(name)  //image size is "size" arg
                    .resizable()
                    .frame(width: size, height: size * 1.2)
                VStack {
                    Spacer()
                    ZStack {
                        Text(name)
                            .font(.title2)
                            .foregroundColor(.white)
                            .bold()
                            .padding([ .bottom], 5)
                    }
                    .frame(maxWidth: .infinity)
                    .background(skyBlue)
                    
            
                }
            }
            .padding()
        }
        .frame(width: size, height: (size * 1.2))
        .cornerRadius(size/4)
        
    }
}

struct SmallPlantCard_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            SmallPlantCard(name: "plant1", size: CGFloat(150))
                .background(.cyan)
                
        }
        .previewLayout(.fixed(width: 300, height: 300))
    }
}
